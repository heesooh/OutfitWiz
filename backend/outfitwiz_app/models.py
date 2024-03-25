from django.db import models
from django.contrib.auth.models import AbstractUser

class CustomUser(AbstractUser):
    # Custom fields can be added here, in addition to the fields provided by AbstractUser.
    # For example, you might want to add a field for user profile information.

    # The following fields are provided by AbstractUser:
    # username: Required. The unique username used for authentication.
    # email: Optional. Email address of the user.
    # first_name: Optional. First name of the user.
    # last_name: Optional. Last name of the user.
    # password: Provided by AbstractUser for storing the hashed password.

    # Additional fields can be added based on your requirements.

    # Example of adding a custom field:
    bio = models.TextField(blank=True, null=True, help_text="A short user biography.")

    groups = models.ManyToManyField(
        "auth.Group", related_name="customuser_groups", blank=True
    )
    user_permissions = models.ManyToManyField(
        "auth.Permission", related_name="customuser_user_permissions", blank=True
    )

    def __str__(self):
        return self.username