import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53248Page } from './s53248.page';

describe('S53248Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53248Page;
  let fixture: ComponentFixture<S53248Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53248Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53248Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
