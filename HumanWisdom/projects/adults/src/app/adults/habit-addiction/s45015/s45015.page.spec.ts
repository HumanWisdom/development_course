import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S45015Page } from './s45015.page';

describe('S45015Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S45015Page;
  let fixture: ComponentFixture<S45015Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S45015Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S45015Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
