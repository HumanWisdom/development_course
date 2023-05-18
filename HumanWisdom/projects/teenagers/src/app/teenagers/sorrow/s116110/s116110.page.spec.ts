import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S116110Page } from './s116110.page';

describe('S116110Page', () => {
      
    let component:  S116110Page;
  let fixture: ComponentFixture<S116110Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S116110Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S116110Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
