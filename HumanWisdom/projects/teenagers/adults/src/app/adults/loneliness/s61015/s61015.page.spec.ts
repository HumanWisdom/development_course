import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S61015Page } from './s61015.page';

describe('S61015Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S61015Page;
  let fixture: ComponentFixture<S61015Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S61015Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S61015Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
