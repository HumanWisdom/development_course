import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S45018Page } from './s45018.page';

describe('S45018Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S45018Page;
  let fixture: ComponentFixture<S45018Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S45018Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S45018Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
