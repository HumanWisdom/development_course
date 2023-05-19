import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S116106Page } from './s116106.page';

describe('S116106Page', () => {
      
    let component:  S116106Page;
  let fixture: ComponentFixture<S116106Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S116106Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S116106Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
