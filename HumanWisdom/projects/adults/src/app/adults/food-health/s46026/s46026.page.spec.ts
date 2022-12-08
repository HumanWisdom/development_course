import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S46026Page } from './s46026.page';

describe('S46026Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S46026Page;
  let fixture: ComponentFixture<S46026Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S46026Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S46026Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
