export type Mission = {
    flight_number: number,
    mission_name: string,
    mission_id: string[],
    upcoming: boolean,
    launch_year: string,
    launch_date_unix: number,
    launch_date_utc: string,
    launch_date_local: string,
    is_tentative: boolean,
    tentative_max_precision: string,
    tbd: boolean,
    launch_window: number,
    rocket: {
        rocket_id: string,
        rocket_name: string,
        rocket_type: string,
        first_stage: {
            cores: [
                {
                    core_serial: string,
                    flight: number,
                    block: number,
                    gridfins: boolean,
                    legs: boolean,
                    reused: boolean,
                    land_success: boolean,
                    landing_intent: boolean,
                    landing_type: string,
                    landing_vehicle: string
                }
            ]
        },
        second_stage: {
            block: number,
            payloads: [
                {
                    payload_id: string,
                    norad_id: number[],
                    reused: boolean,
                    customers: string[],
                    nationality: string,
                    manufacturer: string,
                    payload_type: string,
                    payload_mass_kg: number,
                    payload_mass_lbs: number,
                    orbit: string,
                    orbit_params: { 
                        reference_system: string,
                        regime: string,
                        longitude: number,
                        semi_major_axis_km: number,
                        eccentricity: number,
                        periapsis_km: number,
                        apoapsis_km: number,
                        inclination_deg: number,
                        period_min: number,
                        lifespan_years: number,
                        epoch: string,
                        mean_motion: number,
                        raan: number,
                        arg_of_pericenter: number,
                        mean_anomaly: number
                    }
                }
            ]
        },
        fairings: {
            reused: boolean,
            recovery_attempt: boolean,
            recovered: boolean,
            ship: string
        }
    },
}

export type Comment = {
    id: number,
    content: string,
    missionId: number
}