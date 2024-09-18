import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Unstable_Grid2';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import { styled } from '@mui/material/styles';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import RssFeedRoundedIcon from '@mui/icons-material/RssFeedRounded';
import { BorderColor, Height } from '@mui/icons-material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';
const cardData = [
  {
    img: 'https://picsum.photos/800/450?random=1',
    tag: 'Engineering',
    title: 'Repository Title',
    description: 'Repository description Our latest engineering tools are designed to streamline workflows and boost productivity. Discover how these innovations are transforming the software development landscape.',
    commit: [{
      messageTop: 'fix: resolve issue with user authentication',
      messageRemainder: 'Fixed a bug where users were unable to log in due to a missing token validation step.',
      patchData: '--- a/src/auth.js\n+++ b/src/auth.js\n@@ -10,6 +10,7 @@ import { useHistory } from "react-router-dom";\n import { useAuth } from "./context/auth";\n import { useToasts } from "react-toast-notifications";\n import { useMutation } from "@apollo/client";\n+import { validateToken } from "./utils";\n\n const Login = () => {\n   const { setAuthTokens } = useAuth();\n',
      theGist: 'This commit fixes a critical issue in the user authentication process. Previously, users were unable to log in because the system did not validate their tokens. The patch adds a token validation step to ensure that only users with valid tokens can access the system. This change enhances the security and reliability of the authentication mechanism.'
    },
    {
      messageTop: 'feat: add new feature for user profile customization',
      messageRemainder: 'Added a new feature that allows users to customize their profiles with unique avatars and backgrounds.',
      patchData: '--- a/src/profile.js\n+++ b/src/profile.js\n@@ -10,6 +10,7 @@ import { useHistory } from "react-router-dom";\n import { useAuth } from "./context/auth";\n import { useToasts } from "react-toast-notifications";\n import { useMutation } from "@apollo/client";\n+import { uploadAvatar } from "./utils";\n\n const Profile = () => {\n   const { user } = useAuth();\n',
      theGist: 'This commit adds a new feature that allows users to customize their profiles with unique avatars and backgrounds. Users can upload their own avatars and select from a range of background images to personalize their profiles. This feature enhances the user experience and makes the platform more engaging and interactive.'
    }],
    repoData: [{ name: 'Remy Sharp', avatar: '/static/images/avatar/1.jpg', mostRecentCommitDate: 'July 14, 2021' }],
  },
  {
    img: 'https://picsum.photos/800/450?random=2',
    tag: 'Product',
    title: 'Innovative product features that drive success',
    description: 'Our latest product features are designed to streamline workflows and boost productivity. Discover how these innovations are transforming the software development landscape.',
    commit: [{
      messageTop: 'feat: add new feature for user profile customization',
      messageRemainder: 'Added a new feature that allows users to customize their profiles with unique avatars and backgrounds.',
      patchData: '--- a/src/profile.js\n+++ b/src/profile.js\n@@ -10,6 +10,7 @@ import { useHistory } from "react-router-dom";\n import { useAuth } from "./context/auth";\n import { useToasts } from "react-toast-notifications";\n import { useMutation } from "@apollo/client";\n+import { uploadAvatar } from "./utils";\n\n const Profile = () => {\n   const { user } = useAuth();\n',
      theGist: 'This commit adds a new feature that allows users to customize their profiles with unique avatars and backgrounds. Users can upload their own avatars and select from a range of background images to personalize their profiles. This feature enhances the user experience and makes the platform more engaging and interactive.'
    }],
    repoData: [{ name: 'Remy Sharp', avatar: '/static/images/avatar/1.jpg', mostRecentCommitDate: 'July 14, 2021' }],
  },
];

const SyledCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: 0,
  height: '100%',
  backgroundColor: theme.palette.background.paper,
  '&:hover': {
    backgroundColor: 'transparent',
    cursor: 'pointer',
  },
  '&:focus-visible': {
    outline: '3px solid',
    outlineColor: 'hsla(210, 98%, 48%, 0.5)',
    outlineOffset: '2px',
  },
}));

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


const TextBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: 0,
  border: '1px solid',
  borderColor: theme.palette.divider,
  borderRadius: theme.shape.borderRadius,
  maxHeight: 'none',
  minHeight: '100px', // Ensures a minimum height
  overflow: 'auto',
  flexGrow: 1,
  flexShrink: 0,
  flexBasis: 'auto',
  '&:hover': {
    backgroundColor: 'transparent',
    cursor: 'pointer',
  },
  '&:focus-visible': {
    outline: '3px solid',
    outlineColor: 'hsla(210, 98%, 48%, 0.5)',
    outlineOffset: '2px',
  },
}));


const MessageBox = styled(Box)(({ theme }) => ({
  padding: 0,
  border: '1px solid',
  borderColor: theme.palette.divider,
  borderRadius: theme.shape.borderRadius,
}));

const SyledCardContent = styled(CardContent)({
  display: 'flex',
  flexDirection: 'column',
  gap: 4,
  padding: 16,
  flexGrow: 1,
  '&:last-child': {
    paddingBottom: 16,
  },
});

const StyledTypography = styled(Typography)({
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  WebkitLineClamp: 2,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});

const customStyle = {
  ...darcula,
  'pre[class*="language-"]': {
    ...darcula['pre[class*="language-"]'],
    background: 'transparent', // Your desired background color
    color: 'text.secondary', // Your desired text color
  },
  'code[class*="language-"]': {
    ...darcula['code[class*="language-"]'],
    background: 'transparent', // Your desired background color
    color: 'text.secondary', // Your desired text color
  },
};

const CodeDisplay = ({ patchData }: { patchData: string }) => (
  <SyntaxHighlighter language="diff" style={customStyle}>
    {patchData}
  </SyntaxHighlighter>
);


function CommitData ({ commitData }: {commitData: { messageTop: string; messageRemainder: string; patchData: string; theGist: string; }[] | undefined }) {
  const index: number = 0; // Declare index variable
  const [expandedSections, setExpandedSections] = React.useState<{ [key: number]: boolean }>({});
  const handleExpandClick = (index: number) => {
    setExpandedSections((prevState) => ({
      ...prevState,
      [index]: !prevState[index], // Toggle the specific section's expanded state
    }));
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
    <Grid container spacing={0} rowSpacing={2} columnSpacing={0} gap={2} sx={{ padding: 2 }}>
      <Box width={50}>
        <StyledTypography variant="body2" gutterBottom fontSize={14}>Commit Message</StyledTypography>
      </Box>
      <MessageBox sx={{width:530}}>
        <StyledTypography fontSize={14} variant="body2" gutterBottom padding={1}>
          {commitData?.map((commitData) => commitData.messageTop)}
        </StyledTypography>
        <Collapse in={expandedSections[index]} timeout="auto" unmountOnExit>
          <StyledTypography fontSize={14} variant="body2" gutterBottom padding={1}>
            {commitData?.map((commitData) => commitData.messageRemainder)}
          </StyledTypography>
        </Collapse>
      </MessageBox>
      <Box>
        <ExpandMore
          expand={expandedSections[index]}
          onClick={() => handleExpandClick(index)}
          aria-expanded={expandedSections[index]}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </Box>
    </Grid>
    <Collapse in={expandedSections[index]} timeout="auto" unmountOnExit>
      <Grid container spacing={0} rowSpacing={2} columnSpacing={0} gap={2} sx={{ padding: 2 }}>
        <Box width={50}>
          <StyledTypography variant="body2" gutterBottom fontSize={14}>Patch Data</StyledTypography>
        </Box>
        <TextBox sx={{ width: 530, flex: 1 }} >
          <CodeDisplay patchData={commitData?.map((commitData) => commitData.patchData)?.join('\n') || ''} />
        </TextBox>
      </Grid>
      <Grid container spacing={0} rowSpacing={2} columnSpacing={0} gap={2} sx={{ padding: 2 }}>
        <Box width={50}>
          <StyledTypography variant="body2" gutterBottom fontSize={14}>Gist AI</StyledTypography>
        </Box>
        <TextBox sx={{ width: 530, flex: 1 }}>
          <StyledTypography fontSize={14} variant="body2" gutterBottom padding={1} sx={{ flex: 1 }}>
            {commitData?.map((commitData) => commitData.theGist)}
          </StyledTypography>
        </TextBox>
      </Grid>
    </Collapse>
  </div>
  );
}

function  RepoData({ repoData }: { repoData: { name: string; avatar: string; mostRecentCommitDate: string; }[] }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        gap: 2,
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '16px',
      }}
    >
      <Box
        sx={{ display: 'flex', flexDirection: 'row', gap: 1, alignItems: 'center' }}
      >
        <AvatarGroup max={3}>
          {repoData.map((repoData, index) => (
            <Avatar
              key={index}
              alt={repoData.name}
              src={repoData.avatar}
              sx={{ width: 24, height: 24 }}
            />
          ))}
        </AvatarGroup>
        <Typography variant="caption">
          {repoData.map((repoData) => repoData.name).join(', ')}
        </Typography>
        {repoData.map((repoData, index) => <Typography variant="caption">{repoData.mostRecentCommitDate}</Typography>)}
      </Box>
    </Box>
  );
}

export function Search() {
  return (
    <FormControl sx={{ width: { xs: '100%', md: '25ch' } }} variant="outlined">
      <OutlinedInput
        size="small"
        id="search"
        placeholder="Search…"
        sx={{ flexGrow: 1 }}
        startAdornment={
          <InputAdornment position="start" sx={{ color: 'text.primary' }}>
            <SearchRoundedIcon fontSize="small" />
          </InputAdornment>
        }
        inputProps={{
          'aria-label': 'search',
        }}
      />
    </FormControl>
  );
}

export default function MainContent() {
  const [focusedCardIndex, setFocusedCardIndex] = React.useState<number | null>(
    null,
  );

  const handleFocus = (index: number) => {
    setFocusedCardIndex(index);
  };

  const handleBlur = () => {
    setFocusedCardIndex(null);
  };

  const handleClick = () => {
    console.info('You clicked the filter chip.');
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      <div>
        <Typography variant="h1" gutterBottom>
          Blog
        </Typography>
        <Typography>Stay in the loop with the latest about our products</Typography>
      </div>
      <Box
        sx={{
          display: { xs: 'flex', sm: 'none' },
          flexDirection: 'row',
          gap: 1,
          width: { xs: '100%', md: 'fit-content' },
          overflow: 'auto',
        }}
      >
        <Search />
        <IconButton size="small" aria-label="RSS feed">
          <RssFeedRoundedIcon />
        </IconButton>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column-reverse', md: 'row' },
          width: '100%',
          justifyContent: 'space-between',
          alignItems: { xs: 'start', md: 'center' },
          gap: 4,
          overflow: 'auto',
        }}
      >
        <Box
          sx={{
            display: 'inline-flex',
            flexDirection: 'row',
            gap: 3,
            overflow: 'auto',
          }}
        >
          <Chip onClick={handleClick} size="medium" label="All categories" />
          <Chip
            onClick={handleClick}
            size="medium"
            label="Company"
            sx={{
              backgroundColor: 'transparent',
              border: 'none',
            }}
          />
          <Chip
            onClick={handleClick}
            size="medium"
            label="Product"
            sx={{
              backgroundColor: 'transparent',
              border: 'none',
            }}
          />
          <Chip
            onClick={handleClick}
            size="medium"
            label="Design"
            sx={{
              backgroundColor: 'transparent',
              border: 'none',
            }}
          />
          <Chip
            onClick={handleClick}
            size="medium"
            label="Engineering"
            sx={{
              backgroundColor: 'transparent',
              border: 'none',
            }}
          />
        </Box>
        <Box
          sx={{
            display: { xs: 'none', sm: 'flex' },
            flexDirection: 'row',
            gap: 1,
            width: { xs: '100%', md: 'fit-content' },
            overflow: 'auto',
          }}
        >
          <Search />
          <IconButton size="small" aria-label="RSS feed">
            <RssFeedRoundedIcon />
          </IconButton>
        </Box>
      </Box>
      <Grid container spacing={4} columns={12} alignItems={'flex-start'}>
        <Grid xs={12} md={6} sx={{flex:1}}>
          <SyledCard
            variant="outlined"
            onFocus={() => handleFocus(0)}
            onBlur={handleBlur}
            tabIndex={0}
            className={focusedCardIndex === 0 ? 'Mui-focused' : ''}
          >
            <CardMedia
              component="img"
              alt="green iguana"
              image={cardData[0].img}
              aspect-ratio="16 / 9"
              sx={{
                borderBottom: '1px solid',
                borderColor: 'divider',
                maxHeight: 300,
                flex:1
              }}
            />
            <SyledCardContent sx={{flex:1}}>
              <Typography gutterBottom variant="h6" component="div">
                {cardData[0].title}
              </Typography>
              <StyledTypography variant="body2" color="text.secondary" gutterBottom>
                {cardData[0].description}
              </StyledTypography>
              <CommitData commitData={[cardData[0].commit[0]]} />
            </SyledCardContent>
            <RepoData repoData={cardData[0].repoData} />
          </SyledCard>
        </Grid>
        <Grid xs={12} md={6} sx={{flex:1}}>
          <SyledCard
            variant="outlined"
            onFocus={() => handleFocus(0)}
            onBlur={handleBlur}
            tabIndex={0}
            className={focusedCardIndex === 0 ? 'Mui-focused' : ''}
          >
            <CardMedia
              component="img"
              alt="green iguana"
              image={cardData[1].img}
              aspect-ratio="16 / 9"
              sx={{
                borderBottom: '1px solid',
                borderColor: 'divider',
                maxHeight: 300,
                flex:1
              }}
            />
            <SyledCardContent sx={{flex:1}}>
              <Typography gutterBottom variant="h6" component="div">
                {cardData[1].title}
              </Typography>
              <StyledTypography variant="body2" color="text.secondary" gutterBottom>
                {cardData[1].description}
              </StyledTypography>
              <CommitData commitData={cardData[1].commit} />
            </SyledCardContent>
            <RepoData repoData={cardData[1].repoData} />
          </SyledCard>
        </Grid>
      </Grid>
    </Box>
  );
}
