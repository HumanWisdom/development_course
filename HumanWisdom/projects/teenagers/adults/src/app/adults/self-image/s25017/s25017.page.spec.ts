import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S25017Page } from './s25017.page';

describe('S25017Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S25017Page;
  let fixture: ComponentFixture<S25017Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S25017Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S25017Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
