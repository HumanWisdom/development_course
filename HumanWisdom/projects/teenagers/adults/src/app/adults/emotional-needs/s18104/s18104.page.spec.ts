import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S18104Page } from './s18104.page';

describe('S18104Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S18104Page;
  let fixture: ComponentFixture<S18104Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S18104Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S18104Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
