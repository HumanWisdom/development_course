import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S49018Page } from './s49018.page';

describe('S49018Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S49018Page;
  let fixture: ComponentFixture<S49018Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S49018Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S49018Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
