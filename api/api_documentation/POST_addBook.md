### Resources

    POST http://localhost:3000/addBooks

## Description

It has to send an object containing the following:

    {
        book: {
            ISBN: string,
            Title: string,
            Author: string,
            Description: string,
            NrOfCopies: string,
            NrOfCopiesAvailable: string,
            Publisher: string,
        }
    }

## On Success

    {
        success: boolean,
        data: Object | Array,
    }

## On Failure

    {
        success: boolean,
        message: string
    }