import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S45126Page } from './s45126.page';

describe('S45126Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S45126Page;
  let fixture: ComponentFixture<S45126Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S45126Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S45126Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
