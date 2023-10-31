import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S45012Page } from './s45012.page';

describe('S45012Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S45012Page;
  let fixture: ComponentFixture<S45012Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S45012Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S45012Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
