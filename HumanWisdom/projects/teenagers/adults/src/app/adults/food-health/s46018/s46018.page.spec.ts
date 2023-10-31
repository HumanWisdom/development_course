import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S46018Page } from './s46018.page';

describe('S46018Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S46018Page;
  let fixture: ComponentFixture<S46018Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S46018Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S46018Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
