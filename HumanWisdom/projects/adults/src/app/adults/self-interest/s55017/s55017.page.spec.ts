import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S55017Page } from './s55017.page';

describe('S55017Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S55017Page;
  let fixture: ComponentFixture<S55017Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S55017Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S55017Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
