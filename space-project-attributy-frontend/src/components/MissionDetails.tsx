import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getDate } from "../help/funcs";
import { Mission, Comment } from "../help/types";
import "./MissionDetails.css";

export default function MissionDetails() {
  const [mission, setMission] = useState<Mission | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);

  const params = useParams();

  useEffect(() => {
    fetch(`https://api.spacexdata.com/v3/launches/${params.id}`)
      .then((res) => res.json())
      .then((data) => {
        setMission(data);
      });
  }, []);

  useEffect(() => {
    fetch(`http://localhost:4000/comments/`)
      .then((res) => res.json())
      .then((data) => {
        setComments(data);
      });
  }, [])

  if (mission === null) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <section className="mission-details">
        <img src={mission.links.mission_patch} width="400px" />
        <div className="mission-details-side">
          <h2>
            <b>Mission name: </b>

            <span>{mission.mission_name}</span>
          </h2>

          <p>
            <b>Description: </b>
            {mission.details === null
              ? `No description provided!`
              : mission.details}
          </p>
          <p>
            <b>Launch date: </b>
            <span>{getDate(mission.launch_date_utc)}</span>
          </p>
          <p>
            <b>Launch site: </b>
            <span>{mission.launch_site.site_name_long}</span>
          </p>
          <p>
            <b>Launch success: </b>
            <span>{mission.launch_success ? "Yes" : "No"}</span>
          </p>
          <p>
            <b>Rocket Name: </b>
            <span>{mission.rocket.rocket_name}</span>
          </p>
          <Link to={`/missions`}>
            <button className="back-button">Back</button>
          </Link>
        </div>
      </section>
      <aside className="comments-section">
        <h2 style={{color: "red"}}><u>Comments</u></h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            fetch(`http://localhost:4000/comments`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                content: e.target.content.value,
                missionId: mission.flight_number
              }),
            }).then((res) => res.json())
                .then(() =>
                  fetch(`http://localhost:4000/comments/`)
                .then((res) => res.json())
                .then((data) => {
                  setComments(data);
                })
                )

            e.target.reset();

          }}
        >
          <h2>Leave a Comment</h2>
          <label>
            Comment:
            <textarea
              name="content"
              id="content"
              placeholder="Leave a comment here"
              required
              rows={5}
            ></textarea>
          </label>
          <button>Post</button>
        </form>
        <div>
          {comments.filter((comment) => comment.missionId === mission.flight_number).map((comment) => (
            <div className="comment" key={comment.id}>
              <p>{comment.content}</p>
            </div>
          ))}
        </div>
      </aside>
    </>
  );
}
