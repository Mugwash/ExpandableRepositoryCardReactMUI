import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import PlaceholderBackground from '../images/placeholderbackground.jpg';

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RepoCard() {
  // State to track expanded status of each section by index
  const [expandedSections, setExpandedSections] = React.useState<{ [key: number]: boolean }>({});

  // Toggle function for each section based on its index
  const handleExpandClick = (index: number) => {
    setExpandedSections((prevState) => ({
      ...prevState,
      [index]: !prevState[index], // Toggle the specific section's expanded state
    }));
  };

  // Example commit data
  const commits = [
    { id: 1, messageTop: 'First commit message first sentence', patchdata: 'patch data', thegist: 'AI EXPLANATION OF THE PATCH DATA' }
  ];

  return (
    <Card sx={{ maxWidth: 900, padding: 3 }}>
      <CardHeader title="Repository Name" subheader="Most recent Push" />
      <CardMedia component="img" height="194" image={PlaceholderBackground} />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Readme example for a card in a profile. This is a sample text that can be used to describe the content of the card in the profile component. It can include information about the user, their interests, or any other relevant details. Feel free to customize this text to fit your specific needs.
        </Typography>
      </CardContent>
      <CardActions disableSpacing />
      {/* Map over commits to render each collapsible section independently */}
      {commits.map((commit, index) => (
        <Grid container spacing={-2} rowSpacing={2} sx={{ padding: 0 }} marginTop={-5} key={commit.id}>
          <Grid item xs={12} sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ flex: 1, alignItems:'center', maxWidth:60, maxHeight:60, minWidth:60,minHeight:60 }}>
              <Typography fontSize={14}>Commit Message</Typography>
            </Box>
            <Grid item xs={12} sx={{ display: 'flex', alignItems: 'center', marginTop: 2 }}>
              <Box sx={{ flex: 1, border: '1px solid #ddd', padding: '8px', width: 800,minHeight:40 }}>
                {commit.messageTop}
                <Collapse in={expandedSections[index]} timeout="auto" unmountOnExit>
                  <Box sx={{ paddingTop: 1 }}>
                    Rest of the commit message as applicable rest of the commit message as applicable rest of the commit message as applicable rest of the commit message as applicable
                  </Box>
                </Collapse>
              </Box>
            </Grid>
            <Grid item xs={12} sx={{ display: 'flex', alignItems: 'center', marginTop: 2 }}>
              <ExpandMore
                expand={expandedSections[index]}
                onClick={() => handleExpandClick(index)}
                aria-expanded={expandedSections[index]}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </Grid>
          </Grid>
          <Collapse in={expandedSections[index]} timeout="auto" unmountOnExit>
            <Grid item xs={12} sx={{ display: 'flex', alignItems: 'center', marginTop: 2 }}>
              <Box sx={{ flex: 1, maxWidth:60, maxHeight:60, minWidth:60,minHeight:60 }}>
                <Typography fontSize={14}>Patch Data</Typography>
              </Box>
              <Grid item xs={12} sx={{ display: 'flex', alignItems: 'center' }}>
                <Box sx={{ flex: 1, border: '1px solid #ddd', padding: '8px', width: 800,minHeight:40 }}>
                  {commit.patchdata}
                  <Box sx={{ paddingTop: 1 }}>
                    Rest of the commit message as applicable rest of the commit message as applicable rest of the commit message as applicable rest of the commit message as applicable
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Collapse>
          <Collapse in={expandedSections[index]} timeout="auto" unmountOnExit>
            <Grid item xs={12} sx={{ display: 'flex', alignItems: 'center', marginTop: 2 }}>
              <Box sx={{ flex: 1, maxWidth:60, maxHeight:60, minWidth:60,minHeight:60, }}>
                <Typography fontSize={14}>The Gist</Typography>
              </Box>
              <Grid item xs={12} sx={{ display: 'flex', alignItems: 'center' }}>
                <Box sx={{ flex: 1, border: '1px solid #ddd', padding: '8px', width: 800,minHeight:40 }}>
                  {commit.thegist}
                  <Box sx={{ paddingTop: 1 }}>
                    Rest of the commit message as applicable rest of the commit message as applicable rest of the commit message as applicable rest of the commit message as applicable
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Collapse>
        </Grid>
      ))}
    </Card>
  );
}