import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getDate } from '../help/funcs'
import { Mission } from '../help/types'
import "./MissionDetails.css"

export default function MissionDetails() {
  const [mission, setMission] = useState<Mission | null>(null)

  const params = useParams()

  useEffect(() => {
    fetch(`https://api.spacexdata.com/v3/launches/${params.id}`)
      .then((res) => res.json())
      .then((data) => {
        setMission(data)
      })
  }, [])

  if (mission === null) {
    return <div>Loading...</div>
  }

  return (
    <section className='mission-details'>
      <img src={mission.links.mission_patch} width="400px"/>
      <div className='mission-details-side'>
        <h2>
          
            <b>Mission name: </b>
          
          <span>{mission.mission_name}</span>
        </h2>

        <p>
          <b>Description: </b>
          {mission.details === null ? `No description provided!` : mission.details}
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
          <span>{mission.launch_success ? 'Yes' : 'No'}</span>
        </p>
        <p>
          <b>Rocket Name: </b>
          <span>{mission.rocket.rocket_name}</span>
        </p>
        <Link to={`/missions`}>
          <button className='back-button'>Back</button>
        </Link>
        
      </div>
    </section>
  )
}
