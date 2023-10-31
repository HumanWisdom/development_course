import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S45124Page } from './s45124.page';

describe('S45124Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S45124Page;
  let fixture: ComponentFixture<S45124Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S45124Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S45124Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
