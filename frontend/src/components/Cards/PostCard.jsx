import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
export default function PostCard({ title, content, author, date }) {
  return (
    <div id="card" style={{ display: "flex", textAlign: "center" }}>
      <div>
        <CardMedia
          component="img"
          height="200"
          image="https://thumbs.dreamstime.com/b/blog-information-website-concept-workplace-background-text-view-above-127465079.jpg"
          alt="Paella dish"
        />
      </div>
      <div>
        <Card sx={{ width: 600, height: 200 }}>
          <CardHeader
            action={<IconButton aria-label="settings"></IconButton>}
            title={title}
          />
          <CardContent>{content}</CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
          </CardActions>
        </Card>
      </div>
    </div>
  );
}
