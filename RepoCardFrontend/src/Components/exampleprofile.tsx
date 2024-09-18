import React, { useState } from 'react';
import { GitProfile } from '../types';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const Profile: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [profile, setProfile] = useState<GitProfile | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);


  const fetchProfile = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('http://localhost:8000/api/git/profile/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username }),
      });

      if (!response.ok) {
        const data = await response.json();
        setError(data.message || 'Failed to fetch profile');
      } else {
        const data: GitProfile = await response.json();
        setProfile(data);
      }
    } catch (err) {
      setError('An error occurred while fetching the profile.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Fetch GitHub Profile</h1>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter GitHub username"
      />
      <button onClick={fetchProfile} disabled={loading}>
        {loading ? 'Loading...' : 'Fetch Profile'}
      </button>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      {profile && (
        <div>
          <Box sx={{ minWidth: 275, maxWidth: 500 }}>
            <Card variant="outlined">
              <CardContent>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  <div key={profile.repositories[0].name}>
                    <h3>{profile.repositories[0].name}</h3>
                    <ul style={{ listStyleType: 'none', padding: 0 }}>
                      {profile.repositories[0].commits.map((commit) => (
                        <li key={commit.sha}>
                          <Grid container spacing={2}>
                            <Grid item xs={4}>
                              <Typography variant="subtitle2">Message</Typography>
                            </Grid>
                            <Grid item xs={8}>
                              <Box sx={{ border: '1px solid #ddd', padding: '8px' }}>
                                {commit.message}
                              </Box>
                            </Grid>
                            <Grid item xs={4}>
                              <Typography variant="subtitle2">Date</Typography>
                            </Grid>
                            <Grid item xs={8}>
                              <Box sx={{ border: '1px solid #ddd', padding: '8px' }}>
                                {commit.date}
                              </Box>
                            </Grid>
                            <Grid item xs={4}>
                              <Typography variant="subtitle2">Patch</Typography>
                            </Grid>
                            <Grid item xs={8}>
                              <Box sx={{ border: '1px solid #ddd', padding: '8px' }}>
                                {commit.patch && commit.patch.slice(0, 100)}
                                {commit.patch && commit.patch.length > 100 && '...'}
                              </Box>
                            </Grid>
                          </Grid>
                          <br />
                        </li>
                      ))}
                    </ul>
                  </div>
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </div>
      )}
    </div>
  );
};

export default Profile;