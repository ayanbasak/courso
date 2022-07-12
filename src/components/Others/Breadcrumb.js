import React from 'react';
import { emphasize, withStyles } from '@material-ui/core/styles';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Chip from '@material-ui/core/Chip';
import { Link } from 'react-router-dom';

const Breadcrumb = (props) => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50px', marginTop: '10px' }}>
            <Breadcrumbs aria-label="breadcrumb">
                <Link to='/'>
                    <StyledBreadcrumb component="a" href="#" label="Home" />
                </Link>
                <StyledBreadcrumb label={props.text.currentPage ? props.text.currentPage : props.text} />
            </Breadcrumbs>
        </div>
    );
}
export default Breadcrumb;

const StyledBreadcrumb = withStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.grey[100],
        height: theme.spacing(3),
        color: theme.palette.grey[800],
        fontWeight: theme.typography.fontWeightRegular,
        fontSize: '1.5rem',
        '&:hover, &:focus': {
            backgroundColor: theme.palette.grey[300],
        },
        '&:active': {
            boxShadow: theme.shadows[1],
            backgroundColor: emphasize(theme.palette.grey[300], 0.12),
        },
    },
}))(Chip);
