const express = require('express');

// import Model
const EventModel = require ('../Model/Event')

module.exports = {   
    addEvent: async (req, res) => {
        let event = new EventModel({
            title: req.body.title,
            description: req.body.description,
            guest: req.body.guest
        });
        try {
            const data = await event.save();
            res.status(201).json({
                status: 'success',
                message: "Event added",
                data: data
            });
        } catch (err) {
            res.json({
                message: err
            });
        }
    },

    getAllEvent: async (req, res) => {
    try {
       const data = await EventModel.find();
       if(!data) res.json({
           success: false,
           data: "No events found"
       });
       res.json({
           success: true,
           data:data
       });
    } catch (err) {
        res.json({
            message: err
        })
    }
    },

    deleteEvent: async (req, res) => {
        try {
           const message = await EventModel.deleteOne({
               _id: req.params.eventId
           });
           res.json({
               success: true,
               message:"Event Deleted",
               
           });
        } catch (err) {
            res.json({
                message: err
            })
        }
        }
} 