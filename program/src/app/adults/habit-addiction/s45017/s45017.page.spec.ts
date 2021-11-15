import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S45017Page } from './s45017.page';

describe('S45017Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S45017Page;
  let fixture: ComponentFixture<S45017Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S45017Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S45017Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
