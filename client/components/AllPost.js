import React from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
    root: {
        width: '50%',
        maxHeight: '50vh',
        marginTop: theme.spacing.unit * 3,
        overflowY: 'auto',
    },
    tableRow: {
        '&:hover': {
            background: 'pink',
            cursor: 'pointer'
        }
    },
    table: {
        // minWidth: 700,
    },
});

class AllPost extends React.Component {
    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(id) {
        this.props.history.push(`/post/${id}/`);
    }

    render() {
        const { classes } = this.props;
        return (
            <div id="allPostContainer">
                <Paper className={classes.root}>
                    <Table className={classes.table}>
                        <TableHead>
                            <TableRow>
                                <TableCell align="left">Id</TableCell>
                                <TableCell align="left">Title</TableCell>
                                <TableCell align="left">User</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.props.allPost.map(x => (
                                <TableRow key={x.title} className={classes.tableRow} onClick={() => this.handleClick(x.id)}>
                                    <TableCell align="left">
                                        {x.id}
                                    </TableCell>
                                    <TableCell align="left">{x.title}</TableCell>
                                    {this.props.allUser.length && <TableCell align="left">{this.props.allUser[x.userId - 1].username}</TableCell>}
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Paper>
            </div>
        );
    }
}


const mapState = state => {
    return {
        allPost: state.Post.allPost,
        allUser: state.User.allUser
    };
};

// const mapDispatch = dispatch => {
//     return {
//         getSinglePostThunk: (id) => dispatch(getSinglePostThunk(id))
//     };
// };

export default connect(mapState)(withStyles(styles)(AllPost));
