import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import instance from '../../../services/AxiosOder';
import { useState, useEffect } from 'react';

export default function FilterModel() {
    const [filter, setFilter] = useState(''); 
    const [filterData, setFilterdata] = useState([]);

   
    const FilterEvent = () => {
        if (!filter) {
            return;
        }

        
        const filterParts = filter.split("&").map(item => item.trim());

        
        if (filterParts.length !== 1) {
            console.error("Invalid filter format. Only one filter is allowed (startDate, location, or tags).");
            return;
        }

        
        const [searchQuery] = filterParts;

        
        let params = {};
       
        if (searchQuery.includes('-')) {
            params = { startDate: searchQuery };
        } else if (searchQuery.length > 0) { 
            params = { location: searchQuery } || { tags: searchQuery };
        }

        console.log("Request Params:", params);

        
        instance.get('/event/filter', { params })
            .then((res) => {
                setFilterdata(res.data);
                console.log("Filtered Events:", res.data);
            })
            .catch((err) => {
                console.error("Error fetching filtered events:", err);
            });
    };

    
    useEffect(() => {
        FilterEvent();
    }, [filter]);

    return (
        <Box sx={{ width: 500, maxWidth: '100%' }}>
            <TextField
                fullWidth
                label="Search (one filter: date, location, or tags)"
                id="fullWidth"
                onChange={(e) => setFilter(e.target.value)}
                placeholder="e.g., 2025-01-31 or kurunegala or tech"
            />
            
           
            <div>
                {filterData.length > 0 ? (
                    filterData.map((event) => (
                        <div key={event.id} style={{ marginBottom: '10px' }}>
                            <h3>{event.name}</h3>
                            <p>Date: {event.date}</p>
                            <p>Location: {event.location}</p>
                            <p>Tags: {event.tags}</p>
                        </div>
                    ))
                ) : (
                    <p>No events found.</p>
                )}
            </div>
        </Box>
    );
}
