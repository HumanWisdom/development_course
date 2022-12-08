import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S25023Page } from './s25023.page';

describe('S25023Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S25023Page;
  let fixture: ComponentFixture<S25023Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S25023Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S25023Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
