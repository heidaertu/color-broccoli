import * as React from 'react';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {Card, Theme} from "@material-ui/core";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import mother_farm from '../images/cards/travel/mother_farm.jpg';
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import withStyles from "@material-ui/core/styles/withStyles";


export enum DiaryTheme {
    TRAVEL = "Travel",
    COOKING = "Cooking",
    TECHNOLOGY = "Technology",
    OTHERS = "Others"
}

interface Props {
    diaryTheme: DiaryTheme,
    diaryContent: string,
    classes: any
}

interface State {
    currentDiary: Props
}

const styles = (theme:Theme) => ({
    card: {
        maxWidth: 400,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    actions: {
        display: 'flex',
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
    }
});


export class Diary extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { currentDiary: props};
    }

    render() {
        const { classes } = this.props;

        return (
            <Card className={classes.card}>
                <CardHeader
                    title="Travel"
                    subheader="March 21, 2019"
                />
                <CardMedia
                    className={classes.media}
                    image={mother_farm}
                    title="Mother Farm"
                />
                <CardContent>
                <Typography component="p">
                Visited Mother Farm with Ken Chan!
                </Typography>
                </CardContent>
                <CardActions className={classes.actions} disableActionSpacing>
                    <IconButton aria-label="Add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="Share">
                        <ShareIcon />
                    </IconButton>
                    <IconButton
                        className={classes.expand}
                        // onClick={this.handleExpandClick}
                        // aria-expanded={this.state.expanded}
                        aria-label="Show more"
                    >
                        <ExpandMoreIcon />
                    </IconButton>
                </CardActions>
            </Card>
        );
    }
}

export default withStyles(styles)(Diary);
