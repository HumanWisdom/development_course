import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132239Page } from './s132239.page';

describe('S132239Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132239Page;
  let fixture: ComponentFixture<S132239Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132239Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132239Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
