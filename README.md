# Greenstitch Dashboard

This project is the completed dashboard for Greenstitch.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Reference](#api-reference)
- [Contributing](#contributing)
- [License](#license)

## Installation

To install and set up the project locally, follow these steps:

1. Clone the repository to your local machine: `git clone [repository URL]`
2. Install the required dependencies by running `npm install` in the project directory.
3. Create a `.env` file in the root directory and add the necessary environment variables: (MONGO_URI=mongodb+srv://gpulkit09:6iG5NgVb8vvjxoup@greenstitch.2iszlkw.mongodb.net/greenstitch?retryWrites=true&w=majority).
4. Run the command `npm run dev` to start the development server.

## Usage

Once the project is installed and set up, you can access the Greenstitch dashboard by navigating to http://localhost:3000.
```bash
- [Vercel Link 1](https://green-stitch-r6ku.vercel.app/)
- [Vercel Link 2](https://green-stitch-r6ku-git-main-gpulkit09-gmailcom.vercel.app/)
- [Vercel Link 3](https://green-stitch-r6ku-8u7g5jwf1-gpulkit09-gmailcom.vercel.app/)
```

## API Reference

This project utilizes a REST API to communicate with a database. The API reference for this project can be found at http://localhost:3000/api/createData. This API allows users to add data to the database through a POST request.
Database Structure:
```bash
{
  _id: new ObjectId("643e7cb6291fc46ce799af22"),
  name: 'Ram Shyam Company',
  year: {
    '2016': {
      {
      January: {
        'Emission By Spinning': '723694',
        'Emission By Transportation': '266341',
        'Emission By Carding': '561213',
        'Emission By Heating&Cooling': '761456'
      },
      February: {
        'Emission By Spinning': '721694',
        'Emission By Transportation': '264341',
        'Emission By Carding': '565213',
        'Emission By Heating&Cooling': '661456'
      },
      March: {
        'Emission By Spinning': '726694',
        'Emission By Transportation': '266311',
        'Emission By Carding': '566213',
        'Emission By Heating&Cooling': '261486'
      },
      April: {
        'Emission By Spinning': '723624',
        'Emission By Transportation': '266541',
        'Emission By Carding': '561223',
        'Emission By Heating&Cooling': '251456'
      },
      May: {
        'Emission By Spinning': '723684',
        'Emission By Transportation': '256341',
        'Emission By Carding': '461213',
        'Emission By Heating&Cooling': '831456'
      },
      June: {
        'Emission By Spinning': '723614',
        'Emission By Transportation': '265341',
        'Emission By Carding': '561263',
        'Emission By Heating&Cooling': '561456'
      },
      July: {
        'Emission By Spinning': '723692',
        'Emission By Transportation': '236341',
        'Emission By Carding': '561613',
        'Emission By Heating&Cooling': '461456'
      },
      August: {
        'Emission By Spinning': '723592',
        'Emission By Transportation': '236321',
        'Emission By Carding': '521613',
        'Emission By Heating&Cooling': '361456'
      },
      September: {
        'Emission By Spinning': '728592',
        'Emission By Transportation': '136321',
        'Emission By Carding': '821613',
        'Emission By Heating&Cooling': '261256'
      }
    }
    }
  },
  createdAt: 2023-04-18T11:19:18.848Z,
  updatedAt: 2023-04-18T11:19:18.848Z,
  __v: 0
}
```
You can add different data too and optimize further in code according to your need.

## Contributing

Contributions to this project are welcome. To contribute, follow these steps:

1. Fork the repository.
2. Create a new branch for your changes: `git checkout -b [branch-name]`
3. Make your changes to the codebase.
4. Test your changes.
5. Submit a pull request.

## License

This project is licensed under the [insert license name] license - see the LICENSE.md file for details.
