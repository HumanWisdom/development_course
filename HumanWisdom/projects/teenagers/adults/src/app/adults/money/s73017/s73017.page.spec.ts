import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S73017Page } from './s73017.page';

describe('S73017Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S73017Page;
  let fixture: ComponentFixture<S73017Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S73017Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S73017Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
