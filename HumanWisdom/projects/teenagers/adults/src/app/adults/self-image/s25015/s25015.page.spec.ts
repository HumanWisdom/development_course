import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S25015Page } from './s25015.page';

describe('S25015Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S25015Page;
  let fixture: ComponentFixture<S25015Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S25015Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S25015Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
