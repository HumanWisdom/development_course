import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S57019Page } from './s57019.page';

describe('S57019Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S57019Page;
  let fixture: ComponentFixture<S57019Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S57019Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S57019Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
