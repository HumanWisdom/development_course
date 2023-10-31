import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S25014Page } from './s25014.page';

describe('S25014Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S25014Page;
  let fixture: ComponentFixture<S25014Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S25014Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S25014Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
