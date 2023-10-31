import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S46064Page } from './s46064.page';

describe('S46064Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S46064Page;
  let fixture: ComponentFixture<S46064Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S46064Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S46064Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
