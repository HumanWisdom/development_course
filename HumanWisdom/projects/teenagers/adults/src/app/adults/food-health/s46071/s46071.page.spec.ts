import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S46071Page } from './s46071.page';

describe('S46071Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S46071Page;
  let fixture: ComponentFixture<S46071Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S46071Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S46071Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
