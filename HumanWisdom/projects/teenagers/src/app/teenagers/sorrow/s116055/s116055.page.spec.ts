import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S116055Page } from './s116055.page';

describe('S116055Page', () => {
      
    let component:  S116055Page;
  let fixture: ComponentFixture<S116055Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S116055Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S116055Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
