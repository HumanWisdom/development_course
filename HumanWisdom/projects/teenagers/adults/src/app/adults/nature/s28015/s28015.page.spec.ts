import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S28015Page } from './s28015.page';

describe('S28015Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S28015Page;
  let fixture: ComponentFixture<S28015Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S28015Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S28015Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
