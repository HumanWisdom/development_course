import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S45101Page } from './s45101.page';

describe('S45101Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S45101Page;
  let fixture: ComponentFixture<S45101Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S45101Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S45101Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
