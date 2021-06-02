import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { red } from '@material-ui/core/colors';


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    minHeight: 850,
    maxHeight: 920,
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export function NewsCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const redirect = () => {
    window.open(props.item.url, "_blank");
  };

  return (
    <Card className={[classes.root, props.className]}>
      <CardHeader
        action={
          <IconButton aria-label="settings">

          </IconButton>
        }
        title={props.item.title}
        subheader={props.item.publishedAt.toString()}
      />
      <CardMedia
        className={classes.media}
        image={props.item.urlToImage}
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.item.description}
        </Typography>
      </CardContent>
      <CardContent>
        <Typography paragraph>Source:</Typography>
        <Typography paragraph>
          {props.item.source.name}
        </Typography>
        <Typography paragraph>
          {props.item.content}
        </Typography>
        <Typography paragraph>
          For further read:
          </Typography>
        <Button onClick={redirect} size="small" color="primary" href="#outlined-buttons"  variant="contained">
          Go to Source
          </Button>
      </CardContent>

    </Card>
  );
}