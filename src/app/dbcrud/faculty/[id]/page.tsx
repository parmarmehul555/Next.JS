import React from 'react';
import mysql from "mysql2/promise";

const FacultyDetail = async ({ params }: { params: Promise<{ id: number }> }) => {
    const { id } = await params;
    const config = {
        host: "localhost",
        user: "root",
        database: "nextjs demo"
    }
    const conn = await mysql.createConnection(config);

    const [data, fields] = await conn.query("Select * from user Where UserID = "+id);

    console.log(data);
    

    return (
        <div>
            <img src={data[0].Image} alt={data[0].Name}/>
            <h1>{data[0].Name}</h1>
            <h4>{data[0].Email}</h4>
        </div>
    )
}

export default FacultyDetail