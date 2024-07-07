from django.db import models

# Create your models here.

class Item(models.Model):
    last_name = models.CharField(max_length=50, null=True)
    middle_name = models.CharField(max_length=50, null=True)
    first_name = models.CharField(max_length=50, null=True)
    dateofbirth = models.CharField(max_length=100, null=True)
    placeofbirth = models.CharField(max_length=100, null=True)
    citizenship = models.CharField(max_length=50, null=True)
    address = models.CharField(max_length=50, null=True)
    zipcode = models.CharField(max_length=50, null=True)
    telephone_number = models.CharField(max_length=50, null=True)
    mobile_number = models.CharField(max_length=50, null=True)
    email = models.CharField(max_length=50, null=True)
    extension_name = models.CharField(max_length=50, null=True)
    sex = models.CharField(max_length=50, null=True)
    civil_status = models.CharField(max_length=50, null=True)
    height = models.CharField(max_length=50, null=True)
    weight = models.CharField(max_length=50, null=True)
    blood_type = models.CharField(max_length=50, null=True)
    gsis_id = models.CharField(max_length=50, null=True)
    philhealth_id = models.CharField(max_length=50, null=True)
    pagibig_id = models.CharField(max_length=50, null=True)
    sss_id = models.CharField(max_length=50, null=True)
    tin_id = models.CharField(max_length=50, null=True)
    mother_name = models.CharField(max_length=50, null=True)
    mother_occupation = models.CharField(max_length=50, null=True)
    mother_contact = models.CharField(max_length=50, null=True)
    mother_dateofbirth = models.CharField(max_length=50, null=True)
    father_name = models.CharField(max_length=50, null=True)
    father_occupation = models.CharField(max_length=50, null=True)
    father_contact = models.CharField(max_length=50, null=True)
    father_dateofbirth = models.CharField(max_length=50, null=True)
    elementary = models.CharField(max_length=100, null=True)
    highschool = models.CharField(max_length=100, null=True)
    vocational = models.CharField(max_length=100, null=True)
    college = models.CharField(max_length=100, null=True)
    elementary_sy = models.CharField(max_length=100, null=True)
    highschool_sy = models.CharField(max_length=100, null=True)
    vocational_sy = models.CharField(max_length=100, null=True)
    college_sy = models.CharField(max_length=100, null=True)


    def __str__(self):
        return self.first_name