import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S134064Page } from './s134064.page';

describe('S134064Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S134064Page;
  let fixture: ComponentFixture<S134064Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S134064Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S134064Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
