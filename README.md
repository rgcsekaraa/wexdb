# WEXDB - Workout Exercise Database

WEXDB (Workout Exercise Database) is a community-driven exercise database that allows users to browse a collection of exercises along with their corresponding YouTube tutorial links. The project is designed to be simple, accessible, and community-driven, with all data stored in a JSON file that can be easily updated and contributed to by anyone.

## Features

- **Searchable Exercise Database**: Browse a collection of exercises along with links to instructional YouTube videos.
- **Community Contributions**: The JSON file (`workouts.json`) can be updated by the community, allowing for a growing and evolving database of exercises.
- **Minimalistic Design**: A clean, user-friendly interface that allows users to find exercises quickly.

## JSON Structure

The `workouts.json` file is the heart of the project. It contains a list of exercises, each with a name and a corresponding YouTube link. Below is an example of how the JSON file is structured:

```json
{
  "lastUpdated": "2024-09-02T10:00:00Z",
  "exercises": [
    {
      "name": "Plank",
      "videoUrl": "https://www.youtube.com/watch?v=pSHjTRCQxIw"
    },
    {
      "name": "Lunges",
      "videoUrl": "https://www.youtube.com/watch?v=COKYKgQ8KR0"
    },
    {
      "name": "Burpees",
      "videoUrl": "https://www.youtube.com/watch?v=dZgVxmf6jkA"
    }
}

```
## How to Contribute
We encourage contributions from the community! If you'd like to add new exercises, update existing ones, or make any other changes, follow the steps below:

- ** Fork the Repository: Click the "Fork" button at the top right of this repository to create your own copy.
- ** Clone Your Fork: Clone your fork to your local machine using git clone.
- ** Edit the workouts.json File: Add or update exercises in the JSON file following the structure provided above.
- ** Commit Your Changes: Once you've made your changes, commit them with a clear message.
- ** Submit a Pull Request: Go to the original repository and submit a pull request with your changes.

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Contact
If you have any questions or suggestions, feel free to open an issue or reach out to the maintainers.

