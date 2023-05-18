import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S116049Page } from './s116049.page';

describe('S116049Page', () => {
      
    let component:  S116049Page;
  let fixture: ComponentFixture<S116049Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S116049Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S116049Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
