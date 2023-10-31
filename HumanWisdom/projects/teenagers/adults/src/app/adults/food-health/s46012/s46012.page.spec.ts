import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S46012Page } from './s46012.page';

describe('S46012Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S46012Page;
  let fixture: ComponentFixture<S46012Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S46012Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S46012Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
