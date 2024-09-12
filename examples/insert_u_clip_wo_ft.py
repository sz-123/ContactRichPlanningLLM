def is_inserted(env_object, force_threshold=5.0):
    # post-condition to check if the object is inserted into the specified environment object
    resistance_force = perception.get_resistance_force()
    return resistance_force < force_threshold