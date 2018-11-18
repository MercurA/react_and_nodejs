# Resources

    POST http://localhost:3000/login

## Description

I has to send an object containing the following:

    {
        email: string,
        password: string
    }

## On Success

    {
        success: boolean,
        data: Object | Array,
        token: string
    }

## On Failure

    {
        success: boolean,
        message: string
    }