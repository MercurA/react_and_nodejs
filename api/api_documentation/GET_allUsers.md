# Resouces

    GET http://localhost:3000/get

## Description

A call to get all listed userd from database

The service will require a token to be delivered as proof of authentication.

    {
        "Authorization": "Berear token",
        "email": string
    }

## On Success

    {
        success: boolean,
        data: array
    }

## On Failure

    {
        success: boolean,
        message: string
    }
