function hasCollided(lbullet,lwall)
{
bulletRightEdge=lbullet.x+lbullet.widht;
wallLeftEdge=lwall.x;
if(bulletRightEdge>=wallLeftEdge)
{
    return true
}
return false;
}