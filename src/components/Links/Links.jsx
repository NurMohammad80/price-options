import PropTypes from 'prop-types';

const Links = ({route}) => {
    return (
        <div>
            <li className="mr-10 hover:bg-gray-300 p-3"><a href={route.path}>{route.name}</a></li>
        </div>
    );
};

Links.propTypes = {
    route: PropTypes.object.isRequired
};

export default Links;