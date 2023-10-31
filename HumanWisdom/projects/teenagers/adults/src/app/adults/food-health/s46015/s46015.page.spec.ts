import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S46015Page } from './s46015.page';

describe('S46015Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S46015Page;
  let fixture: ComponentFixture<S46015Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S46015Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S46015Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
